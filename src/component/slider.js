import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";
import "./csses/slider.css"


function Imageslider () {
    let settings={
        dots:true,
        infinite:true,
        speed:200,
        slidesToShow:true,
        slidesToScroll:1,
        cssEase:"linear"
    }

  return (
      <$ImageSlider>
       <Slider {...settings}>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <$img src="imgs/Group 90.png"/>
                    </div>
                    {/*<ul className="social-icon">*/}

                    {/*    <li><a href="#"><i className="fa fa-facebook"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-insta"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-twit"></i></a></li>*/}
                    {/*    <li><a href="#"><i className="fa fa-tlegram"></i></a></li>*/}
                    {/*</ul>*/}
                    <div className="details">
                        <h3>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                            .از طراحان گرافیک است
                        </h3>
                        <h3><b>نرگس محمدی</b></h3>
                    </div>
                </div>
            </div>
           <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <$img src="imgs/Group 500.png"/>

                   </div>
                   <div className="details">
                       <h3>
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                           .از طراحان گرافیک است
                       </h3>
                       <h3>نرگس محمدی</h3>
                   </div>
               </div>
           </div><div className="card-wrapper">
               <div className="card">
                   <div className="card-image">

                       <$img src="imgs/Group 530.png"/>
                   </div>
                   <div className="details">
                       <h4>
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                           .از طراحان گرافیک است
                       </h4>
                       <h3>نرگس محمدی</h3>
                   </div>
               </div>
           </div>
       </Slider>
</$ImageSlider>
  );
}

export default Imageslider;


const $img=styled.img`
    width:100%;
    height:110%;
    `


const $ImageSlider = styled.div`
     position    : relative;
     overflow    : hidden;
     padding: 3rem;
     .slick-dots {
          bottom : -1rem;

          li {
               button {
                    width         : 10px;
                    height        : 10px;
                    border        : 1px solid var(--BLUE);
                    border-radius : 20px;

                    &:before {
                         position      : absolute;
                         top           : 30%;
                         left          : 30%;
                         width         : 7px;
                         height        : 7px;
                         border-radius : 10px;
                         content       : '';
                         text-align    : center;
                         opacity       : .5;
                         transform     : translate(-50%, -50%);
                         transition    : all .3s ease-in-out;
                         }
                    }

               &.slick-active, &:hover {
                    button {
                         border-color :var(--BLUE);
                         &:before {
                              background :var(--BLUE);
                              opacity   : 1;
                              }
                         }
              
                    }


            
               }
          }

  .slick-prev, .slick-next {
    background-color:var(--dark-white);
    display: none;
  }
    

`