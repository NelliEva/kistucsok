import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import AllBlogCards from "../../components/blog/AllBlogCards";



const BlogLayout = () => {
    return(
        <>
            <MDBContainer >
              <AllBlogCards/>
            </MDBContainer>
        </>
    )
}
export default BlogLayout;