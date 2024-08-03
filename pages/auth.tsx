import {useState, useCallback} from 'react';
import Input from "../components/Input";
import axios from 'axios';

const Auth = () => {
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');

const [variont, setVariont] = useState('');

const toggleVariont = useCallback(() => {
    setVariont((currentVariont) => currentVariont === 'login' ? 'register' : 'login');
}, []);

const register = useCallback(async () => {
  try {
    await axios.post('/api/register', {
      email,
      name,
      password,
    });
  } catch (err) {
    console.log(err);
  }
}, []);


  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repea bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
            <img src='/images/logo.png' alt='Logo' className='h-12'/>
        </nav>
        <div className="flex justify-center"> 
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className='text-white text-4xl mb-8 font-semibold'> {variont === 'login' ? 'Sign in' : 'Register'}
                </h2>
                <div className="flex flex-col gap-4">
                    {variont === 'register' && (
                     <Input 
                    label="Username"
                    onChange={(ev:any) => setName(ev.target.value)}
                    id="email"
                    type="email"
                    value={name}
                    />
                    )}
                    <Input 
                    label="Email"
                    onChange={(ev:any) => setEmail(ev.target.value)}
                    id="email"
                    type="email"
                    value={email}
                    />
                    <Input 
                    label="Password"
                    onChange={(ev:any) => setPassword(ev.target.value)}
                    id="email"
                    type="email"
                    value={password}
                    />
                </div>
                <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition ">{variont === 'login' ? 'Login' : 'Sign up'}</button>
                <p className='text-neutral-500 mt-12'>
                {variont === 'login' ? 'First time using Netflix?' : 'Already have account!'}
                <span onClick={toggleVariont} className='text-white ml-1 hover:underline cursor-pointer'>
                    {variont ==='login' ? 'Create an account' : 'Login'}
                </span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;