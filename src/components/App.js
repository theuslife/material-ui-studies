import React, { useState } from 'react'
import { Header, Footer } from './layouts/index'
import Exercises from './Exercises'
import { muscles, exercises } from './store'

const App = (props) => {

    const getExercisesByMuscles = () => {

        return Object.entries(exercises.reduce((exercises, exercise) => {

            const { muscles } = exercise;

            exercises[muscles] = exercises[muscles] !== undefined
                ? [...exercises[muscles], exercise]
                : [exercise]

            return exercises

        }, {}));

    }

    const [category, setCategory] = useState('arms')
    const [exercise, setExercise] = useState({})
    const exercisesArray = getExercisesByMuscles()

    const handleFooter = (categorySelect) => setCategory(categorySelect)

    const handleSelectExercise = (id) => {

        const selectExercise = exercises.find((exercise) => {
            return exercise.id === id
        })

        setExercise(selectExercise)

    }

    return (
        <>
            <Header />
            <Exercises
                exercise={exercise}
                exercises={exercisesArray}
                category={category}
                onSelect={handleSelectExercise}
            />
            <Footer
                muscles={muscles}
                category={category}
                onSelect={handleFooter}
            />
        </>
    )

}

export default App