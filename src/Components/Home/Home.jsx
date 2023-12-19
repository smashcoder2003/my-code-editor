import CourseCard from './CourseCard/CourseCard';
import CourseWindow from "./CourseWindow/CourseWindow";
import CarouselWindow from "./Carousel/CarouselWindow/CarouselWindow";
import './home.css';
import useSWR from "swr";

export default function Home() {
   const fetcher = (...args) => fetch(...args).then((res)  => res.json());
   const { data , error , isLoading } = useSWR('http://192.168.1.131:4000/courses', fetcher);
   if (isLoading)
      return( <div>Loading...</div> );

   if (error){
      console.log(error);
      return(
         <div>
            <h1>Error!!</h1>
         </div>
      );
   }
   if (data) {
      return (
         <>
            <CarouselWindow>
               <CourseWindow title="My Courses">
                  <div className="courseCardWindow">
                     { data['result'].map((course) => <CourseCard key={course['course_id']} img={course['course_img']} title={course['course_name']} description={course['course_description']}/>) }
                  </div>
               </CourseWindow>
            </CarouselWindow>
         </>
      );
   }

}