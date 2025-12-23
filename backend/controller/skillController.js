const Skills = require("../model/skill")

const getSkill = async (req, res) => {
  try {
    const skills = await Skills.find()
    res.status(200).json(skills)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createSkill = async (req, res) => {
  try {
    const skill = await Skills.create(req.body)
    res.status(201).json(skill)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteSkill = async (req, res) => {
  try {
    const skillId = req.params.id
    await Skills.findOneAndDelete({ _id: skillId })
    res.status(200).json({ message: 'successfully deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateskill = async (req, res) => {
  try {
    const skillId = req.params.id
    const updatedSkill = await Skills.findOneAndUpdate({ _id: skillId }, req.body, { new: true, runValidators: true })
    if (!updatedSkill) {
      return res.status(404).json({ message: 'skill not found' })
    }
    res.status(200).json(updatedSkill)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getSkill, deleteSkill, createSkill, updateskill }