import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Feed from './components/Feed'
import Post from './components/Post';
import { PostsProvider } from './context/PostsContext'; 
import { ThemeProvider } from './context/ThemeContext';
import { HeaderFormProvider } from './context/HeaderFormContext';
import ThemeToggler from './components/ThemeToggler';
import PostCreation from './components/PostCreation';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <HeaderFormProvider>
                    <Header />
                    <PostsProvider>
                        <main>
                            <Routes>
                                <Route path="/*" element={<Feed />} /> 
                                <Route path="/post/:id" element={<Post />} />
                                <Route path="/create" element={<PostCreation />} />  
                            </Routes>
                        </main>
                    </PostsProvider>
                </HeaderFormProvider>
                <footer>
                    <ThemeToggler />
                </footer>
            </Router>
        </ThemeProvider>
  );
}

export default App;
