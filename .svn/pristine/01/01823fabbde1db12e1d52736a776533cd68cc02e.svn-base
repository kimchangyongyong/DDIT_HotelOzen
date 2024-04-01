package kr.or.ddit.emp.crm.cstmr.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.exception.PKNotFoundException;
import kr.or.ddit.global.vo.MberVO;
import kr.or.ddit.global.vo.RecomMbrshVO;
import kr.or.ddit.mybatis.mappers.RecomMbrshMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CrmMembshRecomServiceImpl implements CrmMembshRecomService{
	
	private final RecomMbrshMapper dao;

	@Override
	public MberVO retrieveMember(String memId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<MberVO> retrieveMemberList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public RecomMbrshVO getRecomMbrsh(String cstNo) {
		
		RecomMbrshVO vo = dao.select(cstNo);  
		if(vo == null) {
			vo = dao.selectHistoryAndMembsh(cstNo); //회원 고객인데, 가입 시기에 따라 추천 멤버십 테이블에 정보가 없는 경우
			if(vo == null) {
				throw new PKNotFoundException(String.format("%s에 해당하는 회원 고객 없음", cstNo)); //없는 고객 번호			
			}
		}
		return vo;
	}
	
}
