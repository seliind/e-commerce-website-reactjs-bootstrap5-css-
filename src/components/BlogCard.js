import React from 'react'
import { Link } from 'react-router-dom'

export const BlogCard = () => {
  return (
    <>
        <div className='blog-card'>
            <div className='card-image'>
                <img className='img-fluid' src='images/blog-1.jpg' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>17 Dec, 2022</p>
                <h5 className='title'>A beautiful sunday morning renaissance</h5>
                <p className='desc'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                <Link to="/blog/:id" className='button'>Read More</Link>
            </div>
        </div>
    </>
  )
}
