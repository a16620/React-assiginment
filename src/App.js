import './App.css';
import './ProfileCard'
import './PostList'
import styled from "styled-components";
import ProfileCard from './ProfileCard';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <BlogContainer>
        <ProfileCard/>
        <PostList/>
      </BlogContainer>
    </div>
  );
}

const BlogContainer = styled.div`
  display: flex;
`;

export default App;
