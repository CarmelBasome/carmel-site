import { Link } from "react-router-dom";

const About =()=> {
    return <>
      <setion className='about-comp'>
        <h2>About Carmel</h2>
        <div className="about-articles">
          <p>
          I did not study like I wished cause of sickness and poorness but I'm almost genior.
          My father did the best he could til I got a diploma. 
          If I had money i don't know who and how will I become<br/>
          Don't just worry about that, I'm happy of what I'm today and that's misterious.
          </p>
          <p>
            I did mecanic in ITFM high mecanic appartment where I get first of all that mecanic appartment.
            It's one of the most known in this country and opened since belgium colony in DRCongo.
            I got a ordonance document that validated me to work in any garage but i scaped.
            Mecanic wasn't really the person I wished to be.
          </p>
          <p>
            I'm a mecanic good to build and repare as well as to drive rolling engins.
          </p>
          <p>
            God never let his own, I've been taken by a genior in web development carrier,
            and he took worth time to make me web developer among best others.
          </p>
          <p>
            This is now what I'm meant to be, I'm crazy to develop, I provide good well done Job.
            I'm a web developer ready to make any web site.
          </p>
        </div>
        <Link to='/'>back home</Link>
      </setion>
    </>
}
export default About;