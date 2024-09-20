import styles from "../../styles/Doniyor.module.css"
import photos from "../../Assets/photo.doniyor.jpg"


const Doniyor = () => {
  return (
    <>
  <div className={styles.navbar}>
    <div className="left">
        <p className={styles.p1}>A creative agency based in Helsinki</p>
        <p>hello@robi.com</p>
    </div>
    <div className="right">
   <a className={styles.a1} href="">Home</a>
   <a className={styles.a1} href="">About</a>
   <a className={styles.a1} href="">News</a>
   <a className={styles.a1} href="">Contact</a>
   <a href="">Cart</a>
    </div>
  </div>



<h1 className={styles.x1}>Roby</h1>




<div className={styles.center}>
    <div className="left-center">
        <img className={styles.not} src={photos} alt="" />
    </div>
    <div className={styles.rightcenter}>
        <h1 className={styles.xx}>
            We Believe That <br />The power of design <br />Helps <br />Businesses
        </h1>
        <div className={styles.cart}>
            Work <br />With us
        </div>
    </div>
</div>



<div className={styles.words}>
    <h1 className={styles.cx1}>WE PARTNER WITH FORAWRD-THINKING STARTUPS</h1>
    <div className={styles.h1s}>
    <h1>ICEBERG</h1>
    <h1>VISION</h1>
    <h1>HOMEY</h1>
    <h1>RISE</h1>
    <h1>PINPOINT</h1>
    </div>
</div>




<h1 className={styles.x1x}>The Perfect <br />Agenxcy For Your Brend</h1>

<div className={styles.centers}>
    <div className={styles.lets}>
        <h1 className={styles.ph}>We love what we do and create partnerships <br /> with our clients to ensure their digital <br /> transformation is positioned for long-term <br /> success.</h1>
        <h1 className={styles.ph}>We believe that the human dimensions <br /> essential to start any successful project and <br /> that this is where splendid emotional <br /> relationships between the company and <br /> people are born.</h1>
    </div>
    <div className={styles.rigs}>
        <div className={styles.top}>
            <div className={styles.first}>
                <div className={styles.lfg}>Awards</div>
                <div className={styles.lrg}>14</div>
            </div>
            <button className={styles.but}></button>
            <div className={styles.second}>
            <div className={styles.l}>Site of the day</div>
            <div className={styles.l}>3</div>
            </div>

            <div className={styles.third}>
            <div  className={styles.l}>Developer Award</div>
            <div  className={styles.l}>1</div>
            </div>

            <div className={styles.fours}>
            <div  className={styles.l}>Honorable Mention</div>
            <div  className={styles.l}>7</div>
            </div>

            <div className={styles.fives}>
            <div  className={styles.l}>MObile Exelence</div>
            <div  className={styles.l}>3</div>
            </div>

        </div>






        <div className={styles.bottom}>
        <div className={styles.first}>
                <div className={styles.lfg}>Css Design Awards</div>
                <div className={styles.lrg}>34</div>
            </div>
            <button className={styles.but}></button>
            <div className={styles.second}>
            <div  className={styles.l}>Ux Design Awards</div>
            <div  className={styles.l}>10</div>
            </div>

            <div className={styles.third}>
            <div className={styles.l}>Ui Design Awards</div>
            <div className={styles.l}>4</div>
            </div>

            <div className={styles.fours}>
            <div  className={styles.l}>Innovation Design Awards</div>
            <div  className={styles.l}>7</div>
            </div>
            
            <div className={styles.fives}>
            <div className={styles.l}>Website of the day</div>
            <div className={styles.l}>13</div>
            </div>
        </div>
    </div>
</div>



<h1 className={styles.x1}>Selected Work</h1>



<div className={styles.all}>
    <div className={styles.leftt}>
        <div className="card">
            <img className={styles.not} src="" alt="" />
            <h1 className="x1x">Conference</h1>
            <h1 className={styles.p1}>Art Diretion Design</h1>
        </div>
        <div className="card">
            <img className={styles.not} src="" alt="" />
            <h1 className="x1x">Conference</h1>
            <h1 className={styles.p1}>Art Diretion Design</h1>
        </div>
        <div className="card">
            <img className={styles.not} src="" alt="" />
            <h1 className="x1x">Conference</h1>
            <h1 className={styles.p1}>Art Diretion Design</h1>
        </div>
    </div>



    
    <div className={styles.rightt}>
    <div className="card">
            <img className={styles.not} src="" alt="" />
            <h1 className="x1x">Conference</h1>
            <h1 className={styles.p1}>Art Diretion Design</h1>
        </div>
        <div className="card">
            <img className={styles.not} src="" alt="" />
            <h1 className="x1x">Conference</h1>
            <h1 className={styles.p1}>Art Diretion Design</h1>
        </div>
        <div className="card">
            <img className={styles.not} src="" alt="" />
            <h1 className="x1x">Conference</h1>
            <h1 className={styles.p1}>Art Diretion Design</h1>
        </div>
    </div>
</div>




    </>
  )
}

export default Doniyor