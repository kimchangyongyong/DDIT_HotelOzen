package kr.or.ddit.emp.pbl.dclz.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.exception.PKNotFoundException;
import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.AnnualVO;
import kr.or.ddit.mybatis.mappers.HrmYrycMapper;

@Service
public class YrycServiceImpl implements YrycService {
	
	@Inject
	private HrmYrycMapper mapper;
	

	@Override
	public AnnualVO retrieveAnnual(String anlLeaUseNo) {
		AnnualVO annual = mapper.select(anlLeaUseNo);
		if(annual == null)
			throw new PKNotFoundException(String.format("%s 연차 정보 없음.", anlLeaUseNo));
		return annual;
	}

	@Override
	public List<AnnualVO> retrieveAnnualList(PaginationInfo paging) {
		int totalRecord= mapper.selectTotalRecord(paging);
		paging.setTotalRecord(totalRecord);
		return mapper.selectList(paging);
	}

	@Override
	public void createAnnual(AnnualVO annual) {
		mapper.insert(annual);
	}

	@Override
	public void modifyAnnualOfSender(AnnualVO annual) {
		mapper.updateOfSender(annual);
	}

	@Override
	public void modifyAnnualOfReceiver(AnnualVO annual) {
		mapper.updateOfReceiver(annual);
	}
	
	@Override
	public void removeAnnual(String anlLeaUseNo) {
		mapper.delete(anlLeaUseNo);
	}

}
