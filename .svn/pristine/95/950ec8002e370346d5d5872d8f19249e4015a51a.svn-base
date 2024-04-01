package kr.or.ddit.cstmr.rsvt.service;

import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.vo.RsvtVO;
import kr.or.ddit.mybatis.mappers.CstmrRsvtRetrieveMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CstmrRsvtRetrieveServiceImpl implements CstmrRsvtRetrieveService{

	@Inject
	private CstmrRsvtRetrieveMapper dao;
	
	@Override
	public RsvtVO retrieveNberRsvt(Map<String, Object> rsvtData) {
		
		return dao.selectNberRsvtList(rsvtData);
	}

}
