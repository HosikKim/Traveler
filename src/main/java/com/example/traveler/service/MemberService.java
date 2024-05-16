package com.example.traveler.service;
import com.example.traveler.dto.MemberDTO;
import com.example.traveler.domain.Member;


import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;


public interface MemberService {
    MemberDTO save(MemberDTO memberDTO) throws IOException;
    MemberDTO selectMember(String id);
    int checkId(String id);

    int checkNickname(String nickname);

    default Member dtoToEntity(MemberDTO dto){
        Member entity = Member.builder()
                .id(dto.getId())
                .password(dto.getPassword())
                .name(dto.getName())
                .nickname(dto.getNickname())
                .gender(dto.getGender())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .birth(dto.getBirth())
//                .member_img(dto.getMember_img())
//                .crleader(dto.getCrleader())
                .build();
        return entity;
    }

    default MemberDTO entityToDto(Member member){
        MemberDTO dto = MemberDTO.builder()
                .id(member.getId())
                .password(member.getPassword())
                .name(member.getName())
                .nickname(member.getNickname())
                .gender(member.getGender())
                .email(member.getEmail())
                .phone(member.getPhone())
                .birth(member.getBirth())
//                .member_img(member.getMember_img())
//                .crleader(member.getCrleader())
                .build();
        return dto;
    }
}
