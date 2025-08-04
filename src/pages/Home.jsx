import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', type: '', price: '', capacity: '' });
  const [editingId, setEditingId] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ Fetch rooms on load
  useEffect(() => {
    fetchRooms();
    // eslint-disable-next-line
  }, [search, minPrice, maxPrice]);
  
  const fetchRooms = async () => {
    setLoading(true);
    try {
      console.log('=== FETCH ROOMS START ===');
      console.log('Current search state:', search);
      console.log('Current minPrice state:', minPrice);
      console.log('Current maxPrice state:', maxPrice);
  
      // Build query string
      const params = [];
      if (search) {
        console.log('Adding search param:', search);
        params.push(`search=${encodeURIComponent(search)}`);
      }
      if (minPrice) {
        console.log('Adding minPrice param:', minPrice);
        params.push(`minPrice=${minPrice}`);
      }
      if (maxPrice) {
        console.log('Adding maxPrice param:', maxPrice);
        params.push(`maxPrice=${maxPrice}`);
      }
      
      const queryString = params.length ? `?${params.join('&')}` : '';
      console.log('Built query string:', queryString);
  
      // Add timestamp to prevent caching
      const timestamp = Date.now();
      const finalQueryString = queryString ? `${queryString}&_t=${timestamp}` : `?_t=${timestamp}`;
  
      console.log('Final URL:', `http://localhost:5000/api/rooms${finalQueryString}`);
      console.log('=== ABOUT TO MAKE REQUEST ===');
  
      const res = await axios.get(`http://localhost:5000/api/rooms${finalQueryString}`);
      console.log('Response received:', res.data);
      setRooms(res.data);
    } catch (err) {
      console.error('Failed to fetch rooms:', err);
    }
    setLoading(false);
  };

  // ✅ Add or Edit room
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        price: Number(form.price),
        capacity: Number(form.capacity)
      };
      if (editingId) {
        await axios.put(`http://localhost:5000/api/rooms/${editingId}`, payload);
      } else {
        await axios.post('http://localhost:5000/api/rooms', payload);
      }
      setForm({ name: '', type: '', price: '', capacity: '' });
      setEditingId(null);
      fetchRooms();
    } catch (err) {
      console.error('Submit failed:', err);
      alert('Submit failed: ' + (err.response?.data?.error || err.message));
    }
  };

  // ✅ Delete room
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/rooms/${id}`);
      fetchRooms();
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Delete failed: ' + (err.response?.data?.error || err.message));
    }
  };

  // ✅ Load room data for editing
  const handleEdit = (room) => {
    setForm({
      name: room.name || '',
      type: room.type || '',
      price: room.price || '',
      capacity: room.capacity || ''
    });
    setEditingId(room._id);
  };

  const filteredRooms = rooms;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 

  return (
    <div style={{ padding: '20px' }}>
      <h1>Room Booking CRUD</h1>
  

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search rooms..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
      />

        {/*filter by price*/}
        <div style={{ marginBottom: '20px' }}>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={e => setMinPrice(e.target.value)}
        style={{ marginRight: '10px', padding: '8px', width: '120px' }}
    />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        style={{ padding: '8px', width: '120px' }}
      />
    </div>

      {/* 🏨 Room Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <input
          type="text"
          name="name"
          placeholder="Room Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type (e.g. Deluxe, Suite)"
          value={form.type}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          {editingId ? 'Update Room' : 'Add Room'}
        </button>
      </form>
         
         {loading && (
          <div style={{ margin: '20px', textAlign: 'center' }}>
          <span>Loading...</span>
          </div>
          )}



      {/* 📋 Room Cards */}

      {!loading && filteredRooms.length === 0 && (
        <div style={{ margin: '20px', textAlign: 'center', color: 'gray' }}>
          No hotels found
        </div>
      )}


      {!loading && filteredRooms.length > 0 && filteredRooms.map((room) => (
        <div
          key={room._id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
          }}
        >
          <h3>{room.name}</h3>
          <p>Type: {room.type}</p>
          <p>Price: ₹{room.price}</p>
          <p>Capacity: {room.capacity}</p>
          <button onClick={() => handleEdit(room)}>Edit</button>
          <button
            onClick={() => handleDelete(room._id)}
            style={{ marginLeft: '10px', color: 'red' }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;


































// TODO: Add input box 
// TODO: filter hotels based on search 
// TODO: Display hotel cards

/*import React ,{useState} from 'react';

const Home = () => {
  
  const [search,setSearch] = useState("")
  const Hotel = [
     
    {id:1,name:"Sea View Resort",location:"Goa"},
    {id:2,name:"Mountain Retreat",location:"Manali"},
    {id:3,name:"City Lights Hotel",location:"Mumbai"}

  ];

  const filteredHotels = Hotel.filter(hotel =>hotel.name.toLowerCase().includes(search.toLowerCase()));
   
  return (
      <div style ={{ padding :'20px'}}>

        <h1>Hotels</h1>

        <input
          
          type = "text"
          placeholder = "Search hotels..."
          value ={search}
          onChange={(e) => setSearch(e.target.value)}
          style ={{marginBottom: '20px',padding:'8px',width :'300px'}}
    
        />

        {filteredHotels.map(hotel => 
           <div key = {hotel.id}  style = {{
              border: '1px solid #ccc' ,padding :'10px', marginBottom:'10px',
              borderRadius : '8px'

            }}>
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
           </div>
        )}

      </div>

   
  );
};

export default Home;*/