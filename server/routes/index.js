const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;


Hi @Michelle Bury

I had one question regarding the recent email that was sent to the tutors regarding the change for the fullstack tutors from calendly to IC/TRM.
I am currently a FullStack Tutor/TA for one of the UofT's cohort that started in Nov 2023. I am currently located in Ontario, Canada.
