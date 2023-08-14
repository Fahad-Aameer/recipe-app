import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div className="bg-black text-gray-300 flex items-center justify-between px-80 text-2xl py-8">
            <Link to="/">Home</Link>
            <Link to="/create-recipe">Create Recipe</Link>
            <Link to="/saved-recipes">Saved Recipes</Link>
            <Link to="/auth">Login/Register</Link>
        </div>
    )
}