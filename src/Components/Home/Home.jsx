import CourseCard from './CourseCard/CourseCard';
import CourseWindow from "./CourseWindow/CourseWindow";
import CarouselWindow from "./Carousel/CarouselWindow/CarouselWindow";
import useSWR from 'swr';
import './home.css';


export default function Home() {
   // const { data, error, isLoading} =  useSWR('http://localhost:2000/api/courses', fetch)

   return (
      <>
         <CarouselWindow>
            <CourseWindow title="My Courses">
               <div className="courseCardWindow">
                  <CourseCard
                     img="https://www.shutterstock.com/image-vector/os-operating-system-software-computer-260nw-430441498.jpg"
                     title="Operating Systems"
                     description="Intro to Operating Systems: Basics of OS concepts, processes, memory, and file systems. Ideal for beginners."
                  />
                  <CourseCard
                     img="https://www.shutterstock.com/image-vector/os-operating-system-software-computer-260nw-430441498.jpg"
                     title="Operating Systems"
                     description="Intro to Operating Systems: Basics of OS concepts, processes, memory, and file systems. Ideal for beginners."
                  />
                  <CourseCard
                     img="https://www.shutterstock.com/image-vector/os-operating-system-software-computer-260nw-430441498.jpg"
                     title="Operating Systems"
                     description="Intro to Operating Systems: Basics of OS concepts, processes, memory, and file systems. Ideal for beginners."
                  />
                  <CourseCard
                     img="https://www.shutterstock.com/image-vector/os-operating-system-software-computer-260nw-430441498.jpg"
                     title="Operating Systems"
                     description="Intro to Operating Systems: Basics of OS concepts, processes, memory, and file systems. Ideal for beginners."
                  />
                  <CourseCard
                     img="https://www.shutterstock.com/image-vector/os-operating-system-software-computer-260nw-430441498.jpg"
                     title="Operating Systems"
                     description="Intro to Operating Systems: Basics of OS concepts, processes, memory, and file systems. Ideal for beginners."
                  />
                  <CourseCard
                     img="https://www.shutterstock.com/image-vector/os-operating-system-software-computer-260nw-430441498.jpg"
                     title="Operating Systems"
                     description="Intro to Operating Systems: Basics of OS concepts, processes, memory, and file systems. Ideal for beginners."
                  />
                  <CourseCard
                     img="https://www.shutterstock.com/image-vector/os-operating-system-software-computer-260nw-430441498.jpg"
                     title="Operating Systems"
                     description="Intro to Operating Systems: Basics of OS concepts, processes, memory, and file systems. Ideal for beginners."
                  />
               </div>
            </CourseWindow>
         </CarouselWindow>
      </>
   );
}