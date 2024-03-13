import { Link } from 'react-router-dom';

// Clicking this link changes the component being rendered without reloading the page    

const Home = () => {
    return (
        <>
            
            <section className="w-820px">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium animi porro excepturi quam est iure enim, veniam repudiandae doloribus nemo eius necessitatibus ex architecto eligendi dignissimos nobis et minima tenetur?</p>
                <p>This is a link to the <a href="./products">Products</a> page.</p>
                <p>This is a link to the <a href="./contact">Contact</a> page.</p>
                <Link to="/about">About Us</Link>
            </section>
        </>
    );
}

export default Home;