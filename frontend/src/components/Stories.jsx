const Stories = () => {
    const storiesData = [
      { id: 7, image: "https://static.vecteezy.com/system/resources/previews/007/522/957/original/add-story-button-icon-social-media-stories-vector.jpg", username: "Add Yours" },
      { id: 1, image: "https://plus.unsplash.com/premium_photo-1682091872078-46c5ed6a006d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D", username: "user1" },
      { id: 2, image: "https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "user2" },
      { id: 3, image: "https://images.unsplash.com/photo-1710609845812-9546e39dba46?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "user3" },
      { id: 4, image: "https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "user4" },
      { id: 5, image: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "user5" },
      { id: 6, image: "https://images.unsplash.com/photo-1723496954926-d6b4c06d9276?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "user6" },
      
    ];
  
    return (
      <div className="flex gap-4 px-60 overflow-x-auto scrollbar-hide">
        {storiesData.map((story) => (
          <div key={story.id} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-pink-500 overflow-hidden">
              <img src={story.image} alt={story.username} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs mt-2 text-gray-600">{story.username}</span>
          </div>
        ))}
      </div>
    );
  };
  export default Stories
  