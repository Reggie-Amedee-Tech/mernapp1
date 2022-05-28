const asyncHandler = require('express-async-handler')




//@desc Get Goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get goals'})
})

//@desc Set Goals
//@route POST /api/goals
//@access Private

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'set goals'})
})

//@desc Get Goals
//@route PUT /api/goals
//@access Private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `edit goal ${req.params.id}`})
})

//@desc Get Goals
//@route DELETE /api/goals
//@access Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}