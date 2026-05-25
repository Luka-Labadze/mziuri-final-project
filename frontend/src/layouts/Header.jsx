import React from 'react'
import TopNavbar from '../components/TopNavbar'
import BottomNavbar from '../components/BottomNavbar'
import { getProducts } from "../api/api";
import { useState } from 'react';
import { useEffect } from 'react';

function Header() {


  return (
    <>
      <TopNavbar/>
      <BottomNavbar />
    </>
  )
}

export default Header