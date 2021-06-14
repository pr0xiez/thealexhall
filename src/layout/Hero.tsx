import Dev from 'assets/dev.svg'

const Hero = () => {
  return (
    <section className="hero bg-dark text-light p-5 text-center">
      <div className="hero-body container p-5">
        <div className="d-sm-flex mb-5">
          <div>
            <h2 className="pb-4 text-primary">Front-end Developer, User Advocate, Sports Enthusiast</h2>
            <h4 className="text-primary">I enjoy creating beautifully simple applications and love it.</h4>
          </div>
          <img className="img-fluid w-50" src={Dev} alt="dev-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
