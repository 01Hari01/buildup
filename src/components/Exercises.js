import {useEffect, useState} from "react";
import {exerciseOptions, fetchData} from "../utils/api";
import {Box, Pagination, Stack, Typography} from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const values_per_page=9
const Exercises=({exercises,setExercies,bodyPart})=>{
    const [currentPage,setCurrentPage]=useState(1);
    const paginate=(e,value)=>{
        setCurrentPage(value)
        window.scrollTo({top:1800,behavior:'smooth'});
    };
    useEffect(()=>{
        const fetchExerciseData=async ()=>{
            let exercisesData=[];
            if (bodyPart==='all'){
                exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
            }
            else{
                exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
            }
            setExercies(exercisesData)
        }
        fetchExerciseData();
    },[bodyPart])
    const indexOfLastExercise=currentPage * values_per_page
    const indexOfFirstExercise=indexOfLastExercise- values_per_page
    const currentExercises=exercises?.slice(indexOfFirstExercise,indexOfLastExercise)??[];
    return(<>
        <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
            <Typography variant='h3' mb='46px'>
                Showing Results
            </Typography>
            <Stack direction="row" sx={{'gap':{lg:'110px',xs:'50px'}}} flexWrap='wrap' justifyContent={'center'}>
            {currentExercises.map((items,index)=>(<ExerciseCard key={index} exercise={items}/>))}
                </Stack>
            <Stack mt="100px" alignItems={'center'}>
                {exercises.length > values_per_page &&(
                    <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length/values_per_page)} page={currentPage} onChange={paginate} size={"large"}/>
                )}
            </Stack>

        </Box>


    </>)

}
export default Exercises;