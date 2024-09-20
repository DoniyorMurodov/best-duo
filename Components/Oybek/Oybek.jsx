import oybek from '../../styles/Oybek.module.css'
import photos from "../../Assets/photo.doniyor.jpg"
import frame from '../../Assets/frame.png'


const Oybek = ()=> {
    return(
        <div>
            <div className={oybek.oybek1}>
                <div className="left1">
                    <h1 className={oybek.hh1}>Improve your <br /> brand with an <br /> awesome site.</h1>
                    <h1 className={oybek.hh2}>Comprehensive Brand</h1>
                    <p className={oybek.pp1}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in eros.</p>
                    <h1 className={oybek.hh2}>Web Brand</h1>
                    <p className={oybek.pp1}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="right1">
                    <img src={photos} alt="" />
                </div>
            </div>

            <div className="oybek2">
                <img src={frame} alt="" />
            </div>

            <div className="facts">
                <h1 className={oybek.hh3}>Fun Facts</h1>
                <div className={oybek.fact}>
                    <h1 className={oybek.hh1}>8</h1>
                    <h1 className={oybek.hh1}>110+</h1>
                    <h1 className={oybek.hh1}>15</h1>
                    <h1 className={oybek.hh1}>100+</h1>
                </div>
            </div>

            <div className={oybek.oybek1}>
            <div className="1">
                <h1 className={oybek.hh2}>Our Blog</h1>
            </div>
            <div className="2">
               <h1 className={oybek.hh4}>View all Posts</h1> 
            </div>
            </div>  

            <div className={oybek.oybek2}>
                <div className="left">
                    <h1 className={oybek.hh1}>Let's Talk</h1><br />
                    <p>Feel free to contact us</p>
                </div>
                <div className="right">
                    <h1 className={oybek.hh5}>View all Posts</h1> 
                </div>
            </div>

            <div className={oybek.oybek1}>
                <div className="one">
                    <h1 className={oybek.hh6}>Addres</h1>
                    <p>14 New South Head Rd, <br />
                    Triple Bay 3148 <br />
                    London, UK</p>
                </div>
                <div className="two">
                    <h1 className={oybek.hh6}>Sitemap</h1>
                    <a href="">Home</a><br />
                    <a href="">About</a><br />
                    <a href="">News</a>
                </div>
                <div className="three">
                <h1 className={oybek.hh6}>Contact</h1>
                    <a href="">P: 3740 213 301</a><br />
                    <a href="">E: contact@robi.com</a><br />
                </div>
            </div>
        </div>
    )
}

export default Oybek;