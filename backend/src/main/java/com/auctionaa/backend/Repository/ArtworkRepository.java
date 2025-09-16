package com.auctionaa.backend.Repository;

import com.auctionaa.backend.Model.Artwork;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ArtworkRepository extends MongoRepository<Artwork,String> {
    List<Artwork> findTop6ByOrderByPriceDesc();
    List<Artwork> findAll();
}
