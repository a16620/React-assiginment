import styled from "styled-components";

const PostList = () => {
    const posts = [{
        title: '블로그 이전',
        date: 'Jan 24, 2021',
        tag: '#Notice'
    },
    {
        title: '오드로이드 H2 XPEnology',
        date: 'Aug 29, 2020',
        tag: '#Synology'
    },
    {
        title: 'Synology Download',
        date: '오늘',
        tag: '#Development'
    },
    {
        title: '1234567890',
        date: '오늘',
        tag: '#Test'
    }
];

    const posts_mini = [{
        title: '블로그 이전',
        date: 'Jan 24, 2021',
        tag: '#Notice'
    },
    {
        title: '오드로이드 H2 XPEnology',
        date: 'Aug 29, 2020',
        tag: '#Synology'
    },
    {
        title: 'Synology Download',
        date: '오늘',
        tag: '#Development'
    }
];

    return (
        <PostContainer>
            <CardSection>
                {posts.map((item)=><BlogPostCardType {...item}/>)}
            </CardSection>
            <MiniSection>
                {posts_mini.map((item)=><BlogPostMiniType {...item}/>)}
            </MiniSection>
        </PostContainer>
    )
}

const Thumbnail = ({text, size}) => {
    const max_width = Math.max(...(text.split(' ').map(it=>it.length)));
    console.log(max_width);
    const font_size = (size/100)*60/max_width;

    return (
        <ThumbnailFrame theme={{'size':size}}>
            <p style={{'fontSize': String(font_size)+'pt'}}>{text}</p>
        </ThumbnailFrame>
    )
}

Thumbnail.defaultProps = {
    size: 100
};

const ThumbnailFrame = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    text-align: center;
    color: #1748a7;
    word-break: keep-all;

    width: ${props => props.theme.size}px;
    height: ${props => props.theme.size}px;
    box-shadow: 0 0 0 2px #1748a7 inset;
`;

const BlogPostCardType = ({title, date, tag}) => {
    return (
        <Post>
            <Thumbnail text={title}/>
            <div style={{'marginLeft': '5px'}}>
            <PostTitle>{title}</PostTitle>
            <ExtraInfo>
                {date}<br/>
                {tag}
            </ExtraInfo>
            </div>
        </Post>
    )
}

const BlogPostMiniType = ({title, date, tag}) => {
    return (
        <Post style={{width:'200px', height:'300px', 'flex-flow':'column'}}>
            <Thumbnail text={title} size={200}/>
            <div style={{'marginTop': '5px'}}>
                <PostTitle>{title}</PostTitle>
                <ExtraInfo>
                    {date}<br/>
                    {tag}
                </ExtraInfo>
            </div>
        </Post>
    )
}

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

const MiniSection = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const CardSection = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 50%;
    width: 90%;
    margin: 20px 5% 20px 5%;

    padding-bottom: 20px;
    border-bottom: solid 1px grey;

    @media screen and (max-width: 1400px) {
        justify-content: center;
    }
`;

const Post = styled.div`
    display: flex;
    
    width: 500px;
    height: 100px;
    text-align: start;
    margin: 5px 5px 5px 5px;
    padding: 3px;
    box-shadow: 0.5px 1px 2px 1.2px #DCDCDC;
    transition: box-shadow .3s;
    
    &:hover {
        box-shadow: 1px 2px 4px 2.5px #DCDCDC;
    }
`;

const PostTitle = styled.p`
    padding-top: 2px;
    margin: 0px;
    color: #1748a7;
    fonst-size: 15pt;
`;
const ExtraInfo = styled.p`
    color: #74736f;
    font-size: 12pt;
`;

export default PostList;