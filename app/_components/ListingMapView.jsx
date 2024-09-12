"use client"
import React, { useEffect, useState } from 'react'
import Listing from './Listing'
import { supabase } from '@/utils/supabase/client'
import { toast } from 'sonner';
import GoogleMapSection from './GoogleMapSection';

function ListingMapView({ types }) {

    const [listing, setListing] = useState([]);
    const [searchedAddress, setSearchedAddress] = useState();

    const [coordinates, setCoordinates] = useState();

    useEffect(() => {
        getLatestListing();
    }, [types]);

    const getLatestListing = async () => {
        const { data, error } = await supabase
            .from('listing')
            .select(`*,listingImages(
                url,
                listing_id
            )`)
            .eq('active', true)
            .in('type', types)
            .order('id', { ascending: false });

        if (data) {
            setListing(data);
        }
        if (error) {
            toast('Server Side Error');
        }
    };

    const handleSearchClick = async () => {
        console.log(searchedAddress);
        const searchTerm = searchedAddress?.value?.structured_formatting?.main_text;

       const { data, error } = await supabase
            .from('listing')
            .select(`*,listingImages(
                url,
                listing_id
            )`)
            .eq('active', true)
            .in('type', types)
            .like('Location', '%' + searchTerm + '%')
            .order('id', { ascending: false }); 
        if (data) {
            setListing(data);
        }
        if (error) {
            toast('Server Side Error');
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
                <Listing 
                    listing={listing}
                    handleSearchClick={handleSearchClick}
                    searchedAddress={(v) => setSearchedAddress(v)}
                    setCoordinates={setCoordinates}
                />
            </div>
            <div className='fixed right-10 h-full 
            md:w-[350px] lg:w-[450px] xl:w-[650px]'>
                <GoogleMapSection
                    listing={listing}
                    coordinates={coordinates}
                />
            </div>
        </div>
    );
}

export default ListingMapView;
