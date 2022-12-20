const CCTVItem = () => {
  return (
    <video
      id='videoPlay'
      autoPlay
      muted
      controls
      style={{
        width: '50%',
        height: '30%',
        display: 'none',
      }}>
      <source id='src'></source>
    </video>
  );
};
export default CCTVItem;
