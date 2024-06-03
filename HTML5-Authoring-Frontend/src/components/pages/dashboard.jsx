import { useParams } from 'react-router-dom';
import TemplateSelector from '../TemplateSelector';
import Header from './Header';
const Dashboard = () => {
  const { username } = useParams();

  return (
    <div>
      <Header username={username} />
       <TemplateSelector />
    </div>
  );
};

export default Dashboard;
