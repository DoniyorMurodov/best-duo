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

{/* ////////////////////////////////////////////NAVBAR//////////////////////////////////////////////////// */}


<h1 className={styles.x1}>Roby</h1>




<div className={styles.center}>
    <div className="left-center">
        <img className={styles.not} src={photos} alt="" />
    </div>
    <div className="right">
        <h1>
            We Believe That <br />The power of design <br />Helps <br />Businesses
        </h1>
        <div className="cart">
            
        </div>
    </div>
</div>




    </>
  )
}

export default Doniyor