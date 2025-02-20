
/* eslint-disable react/prop-types */
import JobListing from './JobListing';
import { useEffect,useState } from 'react';
import Spinner from './Spinner';
const JobListings = ({isHome = false}) => {
  // const jobListing = !isHome?jobs:jobs.slice(0,3) ;
  const[jobs,setJobs] = useState([]);
  const [loading,setLoading] = useState(true);

    useEffect(()=>{
      const ApiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      const fetchJobs = async()=>{
   try {
    const res = await fetch(`${ApiUrl}`);
    const data = await res.json();
    setJobs(data);
   } catch (error) {
    console.log('error fetching data',error);
    
   } finally{
    setLoading(false);
   }
      }
      fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (

    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {isHome ? 'Recent Jobs': 'Browse Jobs'}
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
         {loading?(<h2>
          <Spinner loading={loading}/>
         </h2>): (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
              
          )
            )}
             </div>
        
         )}
  

      </div>
    </section>
  )
}

export default JobListings
