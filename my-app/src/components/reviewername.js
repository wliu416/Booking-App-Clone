import React, { useState, useEffect } from "react";

const baseURL = "http://127.0.0.1:8000";
const accessToken = localStorage.getItem("accessToken");

const Reviewername = (props) => {
    const id = props.id;
    const [reviewer, setReviewer] = useState(null);

    //get the name of the reviewer
    useEffect(() => {
        const fetchReviewData = async () => {
          try {
            const response = await fetch(`${baseURL}/users/viewProfile/${id}/`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
      
            const data = await response.json();
            if (data.first_name) {
                setReviewer(data.first_name);
            }
            
          } catch (error) {
            console.error(`Error fetching user data: ${error}`);
            setReviewer(null);
          }
        };
          fetchReviewData();
        
      }, []);

    return <div>{reviewer}</div>;
}

export default Reviewername;