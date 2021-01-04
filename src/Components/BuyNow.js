import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "react-bootstrap/Container";
import OwlCarousel from 'react-owl-carousel';  

const BuyNow = () => {
    return (
        <Container>
            <OwlCarousel margin={3}
         autoplay ={true}
         loop={true}>
                <div>
                <Card>
                    <CardContent>jhdgfkjdhgkj</CardContent>
                </Card>
                </div>
                <div>
                <Card>
                    <CardContent>jhdgfkjdhgkj</CardContent>
                </Card>
                </div>
                <div>
                <Card>
                    <CardContent>jhdgfkjdhgkj</CardContent>
                </Card>
                </div>

                {/* <Card>
                    <CardContent>jhdgfkjdhgkj</CardContent>
                </Card>
                <Card>
                    <CardContent>jhdgfkjdhgkj</CardContent>
                </Card>
                <Card>
                    <CardContent>jhdgfkjdhgkj</CardContent>
                </Card> */}

            </OwlCarousel>
        </Container>
    );
};

export default BuyNow;