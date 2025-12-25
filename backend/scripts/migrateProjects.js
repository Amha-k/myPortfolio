const connectDB = require('../config/connect')
const Project = require('../model/project')

;(async () => {
  try {
    await connectDB()

    const projects = await Project.find({
      link: { $exists: true, $ne: '' },
      $or: [{ url: { $exists: false } }, { url: '' }],
    })

    if (!projects.length) {
      console.log('No projects to migrate')
      process.exit(0)
    }

    let count = 0
    for (const p of projects) {
      p.url = p.url || p.link
      await p.save()
      count++
    }

    console.log(`Migrated ${count} project(s): copied link -> url`)
    process.exit(0)
  } catch (err) {
    console.error('Migration error', err)
    process.exit(1)
  }
})()
