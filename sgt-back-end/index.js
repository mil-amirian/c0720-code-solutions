const pg = require('pg');
const express = require('express');
const app = express();
const useJson = express.json();

app.use(useJson);

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  const sql = `
      select *
        from "grades"
       where "gradeId" = $1
    `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  let values;
  if (!req.body.name || !req.body.course || !req.body.grade || isNaN(parseInt(req.body.grade, 10)) || parseInt(req.body.grade, 10) < 0) {
    return res.status(400).json({
      error: 'Content must contain valid name, course and (positive integer or 0) grade data'
    });
  } else {
    values = [req.body.name, req.body.course, parseInt(req.body.grade, 10)];
  }

  const text =
        `insert into 
            "grades" ("name", "course", "grade")
            values ($1, $2, $3)
        returning*
        `;

  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (grade.length < 3) {
        res.status(404).json({
          error: 'Content must contain name, course and grade data'
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  let values;
  const gradeId = parseInt(req.params.gradeId, 10);
  const grade = parseInt(req.body.grade, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0 || !Number.isInteger(grade) || grade < 0) {
    return res.status(400).json({
      error: '"gradeId" and "grade" must be positive integers'
    });
  } else {
    values = [gradeId, grade];
  }

  const text =
          `update 
              "grades"
              set "grade" = $2
              where "gradeId" = $1 
          returning*
          `;

  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (grade === undefined) {
        res.status(404).json({
          error: 'There is no such gradeId available'
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  let values;
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else {
    values = [gradeId];
  }

  const text =
            `delete from "grades"
            where "gradeId" = $1 
            returning*
            `;

  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (grade === undefined) {
        res.status(404).json({
          error: 'There is no such gradeId available'
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server running on port 3000');
});
