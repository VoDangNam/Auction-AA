package com.auctionaa.backend.Service;

import com.auctionaa.backend.Model.User;
import com.auctionaa.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    public String register(User user){
        if(userRepository.existsByEmail(user.getEmail())){
            return "Email đã tồn tại !!!";
        }

        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);


        userRepository.save(user);
        return "đăng ký thành công";
    }
}
