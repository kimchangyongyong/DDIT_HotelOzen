package kr.or.ddit.emp.pbl.oprtnstts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.AnnualVO;
import kr.or.ddit.global.vo.FxtrsRqstVO;
import kr.or.ddit.mybatis.mappers.OprtnSttsMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmpOprtnsttsServiceImpl implements EmpOprtnsttsService {

	private final OprtnSttsMapper dao;
	
	@Override
	public List<FxtrsRqstVO> fxtrsStatusList(String empNo , PaginationInfo paging) {
		int totalRecord = dao.fxtrsSelectTotalRecord(paging, empNo);
		paging.setTotalRecord(totalRecord);
		
		List<FxtrsRqstVO> fxtrsList = dao.fxtrsSelectList(paging, empNo);
		log.info("fxtrsListServiceeeee {}",fxtrsList);
		return fxtrsList;
	}

	@Override
	public List<AnnualVO> annualStatusList(String empNo, PaginationInfo paging) {
		int totalRecord = dao.annSelectTotalRecord(paging, empNo);
		paging.setTotalRecord(totalRecord);
		
		List<AnnualVO> annualList = dao.annSelectList(paging, empNo);
		log.info("annualListServiceeee {}", annualList);
		return annualList;
	}

}
