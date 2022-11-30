import { Link } from "react-router-dom";

const Job =()=>{
    return <>
        <section className='job-section'>
          <container className='job-container'>
            <div>
              <h2>Job</h2>
              <p>
                I'm one among oxide developers community
                I work in team together with geniors in web developpent.
                We provide well done job accoding to the need of our client:
                web-site, mobile applications, menu restaurent, games,...
              </p>
            </div>
            <Link to='/'>back home</Link>
          </container>
        </section>
      </>
}
export default Job;