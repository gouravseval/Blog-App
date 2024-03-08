import React from 'react';
import { Logo, LogoutBtn, Container } from "../index"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='header w-full'>
      <Container>
        <nav>
          <Link className='h-auto' to="/">
            <Logo />
          </Link>
          <ul>
            {navItems.map((items) =>
              items.active ? <li key={crypto.randomUUID()}>
                <button onClick={() => navigate(items.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-button rounded-full'>
                    {items.name}</button>
              </li> : null)}
          </ul>
          {authStatus && (
            <span>
              <LogoutBtn />
            </span>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;