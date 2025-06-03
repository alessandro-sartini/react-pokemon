import { Outlet } from 'react-router-dom';
import NavBar from './../components/headers/NavBar'; 
import '../cssComponents/loader.css'; 
export default function DefaultLayout() {
    
    const sidebarWidth = '250px'; 

    return (
        <div>
            
            <NavBar />

            <div className="flex-grow-1" style={{ marginLeft: sidebarWidth }}>
                

                <main className="p-3">
                    <Outlet /> 
                </main>

                <footer className="p-3 bg-secondary text-white text-center mt-auto"> 
                    footer
                </footer>
            </div>
        </div>
    );
}