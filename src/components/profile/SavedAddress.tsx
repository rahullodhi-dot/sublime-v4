import React, { useState } from 'react';
import { MapPin, Plus, Edit2, Trash2, MoreVertical, X, PlusCircle } from 'lucide-react';

interface Address {
  id: number;
  name: string;
  pincode: string;
  address: string;
  isSelected: boolean;
  type:string
}

interface AddressFormData {
  name: string;
  pincode: string;
  address: string;
}

// Sample addresses - TODO: Replace with API data
const sampleAddresses: Address[] = [
  {
    id: 1,
    name: 'Rohan Mehta',
    pincode: '422038',
    address: '24/3 Shanti Nagar, Near City Mall, Jaipur, Rajasthan',
    type: 'HOME',
    isSelected: true,
  },
  {
    id: 2,
    name: 'Priya Verma',
    pincode: '411045',
    address: 'Flat No. B-502, Green Valley Apartments, Baner Road Pune, Maharashtra',
    type: 'OFFICE',
    isSelected: false,
  },
  {
    id: 3,
    name: 'Kavya Iyer',
    pincode: '560038',
    address: '12/7 3rd Cross, Indiranagar, HAL Road, Bengaluru, Karnataka',
    type: 'OTHER',
    isSelected: false,
  },
  {
    id: 4,
    name: 'Amit Sharma',
    pincode: '110024',
    address: 'H-45, Lajpat Nagar II, Near Metro Station, New Delhi, Delhi',
    type: 'HOME',
    isSelected: false,
  },
  {
    id: 5,
    name: 'Sneha Kapoor',
    pincode: '700091',
    address: 'Tower 3, 8th Floor, Salt Lake Sector V, Kolkata, West Bengal',
    type: 'OFFICE',
    isSelected: false,
  },
];


const SavedAddress: React.FC = () => {

  const addressTypes = ["HOME", "OFFICE", "OTHER"];

const handleTypeChange = (id, type) => {
  setAddresses((prev) =>
    prev.map((addr) =>
      addr.id === id ? { ...addr, type } : addr
    )
  );
};

  const [addresses, setAddresses] = useState<Address[]>(sampleAddresses);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
  const [formData, setFormData] = useState<AddressFormData>({
    name: '',
    pincode: '',
    address: '',
  });

  const handleSelectAddress = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isSelected: addr.id === id
    })));
    // TODO: Update selected address API call
  };

  const handleEdit = (id: number) => {
    setOpenMenuId(null);
    const addressToEdit = addresses.find(addr => addr.id === id);
    if (addressToEdit) {
      setEditingAddressId(id);
      setFormData({
        name: addressToEdit.name,
        pincode: addressToEdit.pincode,
        address: addressToEdit.address,
      });
      setIsModalOpen(true);
    }
  };

  const handleDelete = (id: number) => {
    setOpenMenuId(null);
    setAddresses(addresses.filter(addr => addr.id !== id));
    // TODO: Delete address API call
  };

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleOpenModal = () => {
    setEditingAddressId(null);
    setIsModalOpen(true);
    setFormData({ name: '', pincode: '', address: '' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAddressId(null);
    setFormData({ name: '', pincode: '', address: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.pincode.trim() || !formData.address.trim()) {
      alert('Please fill in all fields');
      return;
    }

    if (editingAddressId) {
      // Update existing address
      setAddresses(addresses.map(addr => 
        addr.id === editingAddressId
          ? {
              ...addr,
              name: formData.name.trim(),
              pincode: formData.pincode.trim(),
              address: formData.address.trim(),
            }
          : addr
      ));
      
      // TODO: API call to update address
      console.log('Address updated:', editingAddressId);
    } else {
      // Create new address
      const newAddress: Address = {
        id: Math.max(...addresses.map(a => a.id), 0) + 1,
        name: formData.name.trim(),
        pincode: formData.pincode.trim(),
        address: formData.address.trim(),
        isSelected: addresses.length === 0, // Select if it's the first address
      };

      // Add to addresses list
      setAddresses([...addresses, newAddress]);
      
      // TODO: API call to save address
      console.log('New address added:', newAddress);
    }
    
    // Close modal and reset form
    handleCloseModal();
  };

  if (addresses.length === 0) {
    return (
      <div className="flex flex-col border  items-center justify-center min-h-[400px]">
        {/* Empty State Icon */}
        <div className="relative mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#316763]/10 flex items-center justify-center">
            <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-[#316763]" />
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-yellow-200/50"></div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-pink-200/50"></div>
        </div>

        {/* Empty State Text */}
        <h2 className="font-karla font-medium text-[#160B07] mb-3 sm:mb-4 text-center text-[18px] leading-none tracking-[4%]">
          No saved addresses!
        </h2>
        <p className="font-karla font-light text-[#160B07] mb-6 sm:mb-8 text-center max-w-md text-[15px] leading-none tracking-[4%]">
          Add an address to make checkout faster
        </p>

        {/* Add Address Button */}
        <button 
          onClick={handleOpenModal}
          className="inline-flex items-center justify-center gap-2 bg-[#316763] hover:bg-[#1A302A] text-white font-karla font-medium text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          Add Address
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-h-[500px] overflow-y-auto no-scrollbar p-6">
      {/* Address List */}
    <div className="space-y-4 mb-6">
  {addresses.map((address) => (
    <div
      key={address.id}
      className="bg-[#FFFFFF] rounded-lg p-4 sm:p-6 border border-[#9a7523] shadow-sm 
      grid grid-cols-[auto_1fr_auto] gap-4 items-center"
    >
      {/* Column 1 — Radio */}
      <button
        onClick={() => handleSelectAddress(address.id)}
        className="mt-1"
        aria-label={`Select ${address.name}'s address`}
      >
        {address.isSelected ? (
          <div className="w-9 h-9 rounded-full border-2 border-[#9a7523] flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-[#9a7523]"></div>
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300"></div>
        )}
      </button>

      {/* Column 2 — Address Details */}
   {/* Column 2 — Address Details */}
<div>
  <div className="flex items-center gap-2 mb-1">
    <h3
      style={{ fontFamily: "gotham-book" }}
      className={`font-semibold text-[20px] leading-[30px] ${
        address.isSelected ? "text-[#2A2A2A]" : "text-[#898989]"
      }`}
    >
      {address.name}, {address.pincode}
    </h3>
  </div>

  <p
    style={{ fontFamily: "gotham-light" }}
    className="font-medium text-[16px] leading-[30px] text-[#898989]"
  >
    {address.address}
  </p>

  {/* ✅ Type Selector */}
  <div className="flex flex-col gap-3 mt-3">
    <h4  style={{fontFamily:"gotham-light"}} className={`text-sm  ${address.isSelected ? "text-black" :"text-gray-500"} font-bold`}> Address Type</h4>
 <div className='flex gap-3'>
      {addressTypes.map((type) => (
      <button
        key={type}
        onClick={() => handleTypeChange(address.id, type)}
        className={`px-3 py-1 rounded-full border text-xs font-medium transition-all
          ${
            address.type === type
              ? "bg-[#9a7523] text-white border-[#9a7523]"
              : "bg-white text-[#9a7523] border-[#9a7523]"
          }
        `}
      >
        {type}
      </button>
    ))}
 </div>
  </div>
</div>


      {/* Column 3 — Three dots */}
      <div className="relative justify-self-end">
        <button
          onClick={() => toggleMenu(address.id)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="More options"
        >
          <MoreVertical className="w-5 h-5 text-[#160B07]" />
        </button>

        {openMenuId === address.id && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setOpenMenuId(null)}
            ></div>

            {/* Dropdown */}
            <div className="absolute right-0 top-10 z-20 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[120px] overflow-hidden">
              <button
                onClick={() => handleEdit(address.id)}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm font-karla text-[#160B07]"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>

              <button
                onClick={() => handleDelete(address.id)}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm font-karla text-red-500"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  ))}
</div>





    </div>
  );
};

export default SavedAddress;
