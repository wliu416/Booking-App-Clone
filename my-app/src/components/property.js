import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faDoorClosed, faCalendar, faWifi, faScrewdriverWrench, faTrash, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useParams } from 'react-router-dom';
import Navbar from "./navbar";
import Reviewername from "./reviewername";
import "./styles/lightbox.min.css";
import Replies from "./replies";


const baseURL = "http://127.0.0.1:8000";
const accessToken = localStorage.getItem("accessToken");

function Property() {
    const [property, setProperty] = useState(null);
    const [user, setUser] = useState(null);
    const [owner, setOwner] = useState(null);
    const { id } = useParams();

    const [useremail, setEmail] = useState(null);
    const [owneremail, setEmail2] = useState(null);
    const [owns, setOwns] = useState(false);
    const [amenities, setAmenities] = useState([]);

    const [reviews, setReviews] = useState([]);

    const [reviewcount, setReviewCount] = useState(0);
    const [totalrating, setTotalRating] = useState(0);

    const [average, setAverage] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);

    const [numpages, setNumPages] = useState(1);

    const [imageUrls, setImageUrls] = useState([]);

    const [urls, setUrls] = useState([]);

    //get the property itself
    useEffect(() => {
        const fetchData = async () => {
          const url = `${baseURL}/properties/${id}/`;
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          setProperty(data);
          if (data.amenities) {
            setAmenities(data.amenities);
          }
        };
      
        fetchData();
      }, []);

      //get the user
      useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`${baseURL}/users/viewMyProfile/`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
      
            const data = await response.json();
            setUser(data);
            if (data.email) {
              setEmail(data.email);
            }
          } catch (error) {
            console.error(`Error fetching user data: ${error}`);
            setUser(null);
          }
        };
      
        fetchUserData();
      }, []);
      
      //get owner
      useEffect(() => {
        const fetchOwnerData = async () => {
          try {
            const response = await fetch(`${baseURL}/users/viewProfile/${property.owner}/`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
      
            const data = await response.json();
            setOwner(data);
            if (useremail === data.email) {
                setOwns(true);
            }
          } catch (error) {
            console.error(`Error fetching user data: ${error}`);
            setOwner(null);
          }
        };
      
        if (property && property.owner) {
          fetchOwnerData();
        }
      }, [property]);

      
      useEffect(() => {
        const fetchReviewData = async () => {
          try {
            const response = await fetch(`${baseURL}/properties/${id}/reviews/?page=${currentPage}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            
            const data = await response.json();
            setReviews(data.results);
            setReviewCount(data.count);
            setNumPages(Math.ceil(reviewcount/5));
            console.log(currentPage);

          } catch (error) {
            console.error(`Error fetching user data: ${error}`);
            setOwner(null);
          }
        };
          fetchReviewData();
        
      }, [currentPage]);

      useEffect(() => {
        let sum = 0;
        reviews.forEach((review) => {
          sum += review.rating_num;
        });
        setTotalRating(sum);
        setAverage(sum / reviews.length);
      }, [reviews]);

      const handleNextClick = (e) => {
        e.stopPropagation();
        if (currentPage < numpages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
      };
    
      const handlePrevClick = (e) => {
        e.stopPropagation();
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
      };
     
      //for the images
      useEffect(() => {
        const fetchUrls = async () => {
          try {
            const response = await fetch(`${baseURL}/properties/${id}/aux/`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setUrls(data);

          } catch (error) {
            console.error(`Error fetching user data: ${error}`);
            setUrls([]);
          }
        };
          fetchUrls();
        
      }, []);

      
      console.log(numpages);
      console.log(currentPage);


      return (
        <>
          <Navbar />
          {property && owner && (
            <>
              {owns ?  <div style={{ float: 'left', marginTop: '20px', marginLeft: '30px'}}><button id="myButton" className="search_button"><a href="#" style={{ textDecoration:'none', color:'inherit'}}>
            <FontAwesomeIcon icon={faScrewdriverWrench}/>  Edit Property</a></button></div>:null}

              <h3 className="property_photo_text1" style={{ color: 'gray', marginTop: '70px', textAlign: 'left', marginLeft: '30px' }}>{property.address_city}, {property.address_country}</h3>
              <h1 className="property_photo_text2" style={{ textAlign: 'left', marginLeft: '30px' }}>{property.name}</h1>

              <div className="host_info" style={{float: 'left', marginTop: '20px', marginLeft: '30px'}}>

                <span style={{marginRight: '10px'}}>Hosted by {owner.first_name} {owner.last_name[0]}. </span>
                <a className= "email" href={`mailto:${owner.email}?subject=Inquiry&body=I would like to inquire about this property`} style={{color: 'black'}}><FontAwesomeIcon icon={faEnvelope}/> {owner.email}</a>  
              </div>
            </>
          )}

        <script src="lightbox-plus-jquery.js"> </script>
        <div className="gallery" style={{ marginTop: '80px' }}>
        
        {urls.map((url) => (
            <a href={`${baseURL}${url.image}`} data-lightbox="mygallery"><img src={`${baseURL}${url.image}`} style={{marginLeft: '30px', marginTop: '20px', borderRadius: '20px', height: '200px', width: '200px'}} /></a>
        ))}
        </div>
        
        {!owns ?
        <div style={{ float: 'left', marginTop: '20px', marginLeft: '30px'}}><button id="myButton" className="search_button"><a href="#" style={{ textDecoration:'none', color:'inherit'}}>
            <FontAwesomeIcon icon={faLocationDot}/>  Book This Property!</a></button></div> : null}
        

          <h3 style={{ textAlign: 'left', marginLeft: '30px', marginTop: '70px'}}>About This Property</h3>
          
          {property && (
            <>
          <div class="container_item">
            <div class="amenities">
                <h6>Amenities</h6>
                {amenities.map((amenity) => (
                    <span>{amenity} </span>
                ))}
            </div>
            <div class="description">
                <h6>Property Description</h6>
                <p style={{textAlign:'left'}}>{property.description}</p>
            </div>
            </div>
            </>)}
        
            <div id="reviews" style={{marginLeft: '30px'}}>
                <h3 style={{textAlign: 'left'}}>Reviews</h3>
                <div style={{border: '1px solid lightgray', textAlign: 'left', borderRadius: '20px', marginRight: '20px', marginBottom: '10px'}}> 
                <span><img src={require('./star.png')} style={{ width: '40px'}}></img> {average} Stars &middot; {reviewcount} Reviews </span>

                {reviews.map((review) => (
                    <div style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px'}}>
                        <Reviewername id={review.reviewer}/>
                        <div><img src={require('./star.png')} style={{ width: '20px', marginTop: '-3px'}}></img>{review.rating_num} Stars</div>
                        <div>{review.comment_text}</div>
                        <Replies property_id={id} id={review.id}/>
                    </div>
                ))}

                <button onClick={handleNextClick} style={{borderRadius: '5px', marginRight: '10px', marginLeft: '10px', marginBottom: '10px', backgroundColor: 'white'}}>Next</button>
                <button onClick={handlePrevClick} style={{borderRadius: '5px', backgroundColor: 'white'}}>Previous</button>

                </div>
            </div>
            {owns ?  <div style={{ float: 'left', marginTop: '10px', marginLeft: '30px', marginBottom: '20px'}}><button id="myButton" className="search_button2"><a href="#" style={{ textDecoration:'none', color:'inherit'}}>
            <FontAwesomeIcon icon={faTrash}/>  Delete Property</a></button></div>:null}
         
        </>
      );
    }

export default Property;