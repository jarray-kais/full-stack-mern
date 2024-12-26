import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Header from '../../src/components/Header';
import { StoreContext } from '../../src/StoreContext';


describe(Header,()=>{
    it('renders header with correct title', () => {
  const mockValue = { title: 'Add book' };
  render(
    <StoreContext.Provider value={mockValue}>
        <BrowserRouter>
         <Header />
        </BrowserRouter>
    </StoreContext.Provider>
  );
  // Check if the title is rendered
  expect(screen.getByText(mockValue.title)).toBeInTheDocument();

  });
  it('should renders links with correct path ',()=>{
    const mockValue = { title: 'CATALOG' };
  render(
    <StoreContext.Provider value={mockValue}>
        <BrowserRouter>
         <Header />
        </BrowserRouter>
    </StoreContext.Provider>
  );
  const cataloglink= screen.getByText('Catalog').closest('a')
  const addbooklink= screen.getByText('Add Book').closest('a')

  expect(cataloglink).toHaveAttribute('href' , '/')
  expect(addbooklink).toHaveAttribute('href' , '/create')

  })

  

})
