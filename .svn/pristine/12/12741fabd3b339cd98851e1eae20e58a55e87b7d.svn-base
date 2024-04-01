package kr.or.ddit.cstmr.recom.service;

import java.util.List;

import kr.or.ddit.global.common.exception.PKNotFoundException;
import kr.or.ddit.global.vo.SbrsVO;
import kr.or.ddit.global.vo.ScrapVO;

public interface CstmrRecomSbrsService {

	/**
	 * 부대시설 추천 조회
	 * @param parameterMap
	 * @return 존재하지 않을 경우, {@link PKNotFoundException} 발생 
	 */
	public List<SbrsVO> retrieveSbrs(String sbrsCd);

	public int insertSbrsScrap(ScrapVO newScrap);
	
	public int deleteSbrsScrap(ScrapVO deleteScrap);
	
	/**
	 * 스크랩 되어있는지 확인 코드
	 * @param cstNo
	 * @param sbrsCd
	 * @return
	 */
	public boolean checkSbrsScrap(String cstNo, String sbrsCd);
}
