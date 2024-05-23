import { useSelector } from 'react-redux';
import { selectUserById } from './usersSlice';
import { selectPostsByUser } from '../posts/postsSlice';
import { Link, useParams } from 'react-router-dom';

export default function UserPage() {
  const { userId } = useParams();
  const users = useSelector(state => selectUserById(state, +userId));

  const postsForUser = useSelector(state => selectPostsByUser(state, +userId));

  const postsTitle = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{users?.name}</h2>
      <ol>{postsTitle}</ol>
    </section>
  );
}
