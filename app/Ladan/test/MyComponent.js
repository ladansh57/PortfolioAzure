import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../ladan.module.css";
import Link from "next/link";

const MyComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=10&limit=5"
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const galleryCategories = [
    {
      category: "Work Experience CIBC",
      items: [
        {
          title: "Office View",
          imageUrl: "/api/images/cibc3.jpg",
          link: "/api/images/cibc3.jpg",
        },
        {
          title: "ACDC Team Lunch",
          imageUrl: "/api/images/cibc5.jpg",
          link: "/api/images/cibc5.jpg",
        },
        {
          title: "Run For The Cure",
          imageUrl: "/api/images/cibc2.jpg",
          link: "/api/images/cibc2.jpg",
        },
        {
          title: "Office",
          imageUrl: "/api/images/cibc4.jpg",
          link: "/api/images/cibc4.jpg",
        },
      ],
    },
    {
      category: "Memories Of Other Offices",
      items: [
        {
          title: "Paayatech Christmas Party",
          imageUrl: "/api/images/paaya2.jpg",
          link: "/api/images/paaya2.jpg",
        },
        {
          title: "Paayatech New Year",
          imageUrl: "/api/images/paaya1.jpg",
          link: "/api/images/paaya1.jpg",
        },
        {
          title: "Bond Brand Loyalty Summer Event",
          imageUrl: "/api/images/bond3.jpg",
          link: "/api/images/bond3.jpg",
        },
        {
          title: "Bond Brand Loyalty New Year Party",
          imageUrl: "/api/images/bond5.jpg",
          link: "/api/images/bond5.jpg",
        },
        {
          title: "Bond Brand Loyalty Christmas",
          imageUrl: "/api/images/bond9.jpg",
          link: "/api/images/bond9.jpg",
        },
        {
          title: "Bond Brand Loyalty Halloween Party",
          imageUrl: "/api/images/bond11.jpg",
          link: "/api/images/bond11.jpg",
        },
        {
          title: "Bond Brand Loyalty Halloween Party",
          imageUrl: "/api/images/bond10.jpg",
          link: "/api/images/bond10.jpg",
        },
        {
          title: "Bond Brand Loyalty Team Event",
          imageUrl: "/api/images/bond1.jpg",
          link: "/api/images/bond1.jpg",
        },
       
      ],
    },
    {
      category: "Graduation",
      items: [
        {
          title: "Canadian Business College Graduation Ceremony",
          imageUrl: "/api/images/canbu1.jpg",
          link: "/api/images/canbu1.jpg",
        },
        {
          title: "Canadian Business College Graduation Ceremony",
          imageUrl: "/api/images/canbu2.jpg",
          link: "/api/images/canbu2.jpg",
        },
        
      ],
    },
    {
      category: "Citizenship",
      items: [
        {
          title: "Canadian Citizenship Ceremony",
          imageUrl: "/api/images/citizen.jpg",
          link: "/api/images/citizen.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Journey Through My Life and Career</h1>
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.galleryContainer}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.galleryItem}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    />
                    <h3 className={styles.galleryTitle}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyComponent;
