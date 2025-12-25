require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/connect');
const Project = require('../model/project');

async function migrate() {
  try {
    await connectDB();

    const filter = { $and: [ { link: { $exists: true, $ne: null, $ne: '' } }, { $or: [ { url: { $exists: false } }, { url: null }, { url: '' } ] } ] };
    const projects = await Project.find(filter).lean();
    if (!projects.length) {
      console.log('No projects to migrate.');
      process.exit(0);
    }

    for (const p of projects) {
      const updated = await Project.findByIdAndUpdate(p._id, { $set: { url: p.link } }, { new: true });
      console.log(`Migrated project ${p._id}: set url = link (${p.link})`);
    }

    console.log('Migration complete.');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

migrate();
