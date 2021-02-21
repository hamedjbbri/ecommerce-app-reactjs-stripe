 import React from 'react';
 import { Grid } from '@material-ui/core';

 import Product from './Product/Product'
 import useStyles from './styles';

 const products = [
     { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://images.unsplash.com/photo-1578116922645-3976907a7671?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80'},
     { id: 2, name: 'Table', description: 'Living room table.', price:'$15', image: 'https://pngimg.com/uploads/table/table_PNG7005.png'},
 ];

 const Products = () => {

     const classes = useStyles();
     return( 
    <main className={classes.content}>
        <div className={classes.toolbar} /> 
        <Grid container justify="center" spacing={4} >
           {products.map((product) => (
               <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                   <Product product={product}/> 
               </Grid>
           ))}
        </Grid>
    </main>
     )
 }

 export default Products;