
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Container from '@mui/material/Container';

export const Home = () => {
    const [products, setProducts] = useState([]);

    // Fetch data from the external API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data); // Set fetched product data
            })
            .catch((error) => {
                console.error("Error fetching data: ", error); // Handle error
            });
    }, []);

    return (
        <Container>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.title}
                                style={{ objectFit: 'contain' }} // Ensures the image fits nicely within the card
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Rate: {product.rating.rate} | Count: {product.rating.count}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
