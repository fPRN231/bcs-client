import React from "react";

const About: React.FC<any> = () => {
    return (
        <section className="about-us">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <i className="fas fa-paw title-icon"></i>
                        <p className="title-top">About Us</p>
                        <h2 className="section-title">We Care <br />About Your Pet</h2>
                    </div>							
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="btn btn-primary mt-4">Know More</a>
                </div>
                <div className="col-md-6">
                    <img src={'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'} alt="About Us" className="img-fluid" />
                    <div className="exp-box">
                        <h3>15+</h3>
                        <p>Years <br />Experience</p>
                    </div>
                </div>
            </div>					
        </div>
    </section>
    )
}
export default About;